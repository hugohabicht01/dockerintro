FROM caddy:latest
COPY Caddyfile /etc/caddy/Caddyfile
COPY index.html /srv
