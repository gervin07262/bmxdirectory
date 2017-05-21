# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )


Rails.application.config.assets.precompile += %w( global.js )
Rails.application.config.assets.precompile += %w( maps.js )
Rails.application.config.assets.precompile += %w( circuits.js )
Rails.application.config.assets.precompile += %w( circuits/new.js )
Rails.application.config.assets.precompile += %w( circuits/edit.js )
Rails.application.config.assets.precompile += %w( shops/new.js )
Rails.application.config.assets.precompile += %w( shops/edit.js )
Rails.application.config.assets.precompile += %w( site/index.js )
Rails.application.config.assets.precompile += %w( site/shops.js )
Rails.application.config.assets.precompile += %w( shops_functions.js )
Rails.application.config.assets.precompile += %w( site/events.js )
Rails.application.config.assets.precompile += %w( events_functions.js )
