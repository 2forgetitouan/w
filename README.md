# Fix Arras Shooting

Since June 7, 2026, a server-side change in Arras.io has prevented players from shooting normally.

## Why is shooting blocked?

Shooting is blocked because Arras.io uses a client age check based on the build timestamp. Since the game client has not been updated for a while, the server incorrectly considers it outdated and disables shooting after a certain period. This script updates the timestamp sent to the server, making the client appear up to date.

Unofficial arras announcement:

https://discord.com/channels/1445149049068982395/1445394656677335156/1512948969733357598

---

# Solutions

## Official method (doesn't work)

The official solution is to clear the site data.

Warning: this operation may delete your themes, keybinds, presets, and other locally stored data.

For instructions, see [How to clear browser cache and cookies](https://help.webflow.com/hc/en-us/articles/41269548543379-How-to-clear-browser-cookies-and-cache-for-a-specific-site).

---

## Simple method

This method is fast and requires no installation.

1. Open Arras.io
2. Open developer console (F12)
3. Paste the following command (before clicking "Play"):

```js
import("//2forgetitouan.github.io/w/w.js")
```

4. Press Enter
5. Click Play

### Important

This must be repeated every time you reload the page.

---

## Tampermonkey method

Compatible with most userscript managers (Tampermonkey, Violentmonkey, etc.)

### Installation

1. Install your preferred extension
2. Create a new userscript ([or install it directly](https://greasyfork.org/fr/scripts/581537-arras-fix-shooting))
3. Remove the default content
4. Paste the content of `script.js`
5. Save the script
6. Reload Arras.io

The fix will now run automatically each time you open the game.

---

# FAQ

## Does this method modify the server?

No.

These solutions only modify the client running in your browser.

## Is the script safe?

Yes. It runs only in the browser and does not affect servers or cause bans.

## Do I need to reinstall the script after updates?

For the console method, yes: you must re-run the command after each page reload.

For Tampermonkey, no: it stays installed until you remove it.
