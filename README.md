# Deno + Caddy web server template

This is the root web project on the server. 

It contains a `/html` directory with the frontend build assets.

It also features a Deno setup in the root of the project.

## Prerequisites

1) Install `Caddy`: https://caddyserver.com/docs/running
2) Install `Deno`: https://www.digitalocean.com/community/tutorials/how-to-install-the-deno-javascript-runtime-on-ubuntu-20-04
3) Install `Monit`: https://mmonit.com/wiki/Monit/ConfigurationExamples

### Process

The server starts automatically after installing it.

## Web server config (Caddyfile)

`Caddyfile`:

```
:80 {
  reverse_proxy localhost:8080
}
```

    Note: Don't enable both static file server and default reverse proxy :)

If making changes, then reload the `Caddy` server buy running:

```
systemctl reload caddy
```

or:

```
caddy reload --config Caddyfile
```

## Process management

The easiest and no install solution to make the Deno process running is to use `systemd`.

This ensures that Caddy and the Deno processes are kept alive when we close the terminal.

### Create a systemd service config file

Create `/etc/systemd/system/deno-webapp.service`

```
insert file here
```

Launch it with:

```
systemctl start deno-webapp
```

Also start Caddy with their provided config. See: https://caddyserver.com/docs/running

```
sudo systemctl daemon-reload
sudo systemctl enable --now caddy
```

