require_relative 'boot'

require 'rails/all'
require 'cloudflare_proxy'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ColdpressRecords
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.


    config.action_mailer.default_url_options = { host: ENV["MAIL_USERNAME"] }
    config.middleware.use CloudflareProxy
  end
end