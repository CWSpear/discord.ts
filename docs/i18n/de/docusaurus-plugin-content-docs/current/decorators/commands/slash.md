# @Slash - Discord commands

Discord has it's own command system now, you can simply declare commands and use application commands this way

```ts
import { Discord, Slash } from "discordx";

@Discord()
abstract class AppDiscord {
  @Slash("hello")
  private hello() {
    // ...
  }
}
```

## Initialize client and application commands

It require a bit of configuration at you Client initialization.
You have to manualy execute and initialize your application commands by using:

- `client.initApplicationCommands()`
- `client.executeInteraction(interaction)`

This provide flexibility in your code

```ts
import { Client } from "discordx";

async function start() {
  const client = new Client({
    botId: "test",
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });

  client.once("ready", async () => {
    await client.initApplicationCommands();
  });

  client.on("interactionCreate", (interaction) => {
    client.executeInteraction(interaction);
  });

  await client.login("YOUR_TOKEN");
}

start();
```

:::danger
**Global** application commands take time to propagate on discord servers, we recommend to develop on a test server with the **Guild** specific mode

```ts
const client = new Client({
  botId: "test",
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  botGuilds: process.DEV ? ["GUILD_ID"] : undefined,
});
```

:::

### Clear application commands from Discord cache

You can remove application commands from the Discord cache by using `client.clearApplicationCommands(...guildIDs: Snowflake[])`

> If you do not specify the guild id you operate on global application commands

```ts
client.once("ready", async () => {
  await client.clearApplicationCommands();
  await client.clearApplicationCommands("546281071751331840");
  await client.initApplicationCommands();
});
```

### Fetch application commands from Discord

or fetch them by using `client.fetchApplicationCommands(guildID: string)`

> If you do not specify the guild id you operate on global application commands

```ts
client.once("ready", async () => {
  // ...
  const applicationCommands = await client.fetchApplicationCommands();
});
```

### Get declared application commands

You can retrieve the list of declared application commands on your application (declared using @Slash, @ContextMenu)

```ts
const applicationCommands = client.applicationCommands;
```

### Apply application command to specific guild globaly

Instead on doing this for all of your @Slash:

> You can manage it by yourself using your own the Slashes `Client` API and creating your own `client.initApplicationCommands()` implementation

```ts
@Discord()
abstract class AppDiscord {
  @Guild("GUILD_ID")
  @Slash("hello")
  private hello() {
    // ...
  }

  @Guild("GUILD_ID")
  @Slash("bye")
  private bye() {
    // ...
  }
}
```

You can do:

```ts
const client = new Client({
  botId: "test",
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  botGuilds: ["GUILD_ID"],
});
```

```ts
@Discord()
abstract class AppDiscord {
  @Slash("hello") // Applied on GUILD_ID
  private hello() {
    // ...
  }

  @Slash("bye") // Applied on GUILD_ID
  private bye() {
    // ...
  }
}
```

## Signature

```ts
Slash(
  name?: string,
  params?: ApplicationCommandParams
)
```

## Parameters

### Name

`string`

The Slash command name

### ApplicationCommandParams

`object`

Multiple options, check below.

#### botIds

`string[]`

Array of bot ids, for which only the event will be executed.

#### defaultPermission

`boolean` `default: true`

"You can also set a default_permission on your commands if you want them to be disabled by default when your app is added to a new guild. Setting default_permission to false will disallow anyone in a guild from using the command--even Administrators and guild owners--unless a specific overwrite is configured. It will also disable the command from being usable in DMs."

#### Description

`string`
The Slash command description

#### Guilds

`string[]`
The guilds where the command is created

## Authorize your bot to use Slash commands

On the Discord's developer portal, select your bot, go to the OAuth2 tab and check the box **bot** AND **applications.commands**

![](../../../static/img/authorize1.png)
![](../../../static/img/authorize2.png)

## See also

- [discord.js's documentation with Interactions (Slash commands)](https://discord.js.org/#/docs/main/master/general/welcome)
- [Discord's Slash commands interactions](https://discord.com/developers/docs/interactions/slash-commands)