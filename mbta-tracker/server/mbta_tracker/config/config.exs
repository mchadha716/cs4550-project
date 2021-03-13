# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :mbta_tracker,
  ecto_repos: [MbtaTracker.Repo]

# Configures the endpoint
config :mbta_tracker, MbtaTrackerWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "uLUH+4IMNT58WXg9nnv0YD4gHSnwFxQc7CYTOAQcejWDZC5ugazxmXa3GH6YVy0S",
  render_errors: [view: MbtaTrackerWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: MbtaTracker.PubSub,
  live_view: [signing_salt: "pNIbWY6x"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
