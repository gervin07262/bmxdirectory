# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170402213547) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "circuits", force: :cascade do |t|
    t.string   "name"
    t.string   "location_x"
    t.string   "location_y"
    t.string   "web"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "user_id"
    t.integer  "dressing_rooms"
    t.float    "price"
    t.integer  "training_classes"
    t.string   "address"
    t.integer  "state"
    t.index ["user_id"], name: "index_circuits_on_user_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.datetime "date"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_events_on_user_id", using: :btree
  end

  create_table "insurances", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_insurances_on_user_id", using: :btree
  end

  create_table "posts", force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.datetime "date"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "state"
    t.index ["user_id"], name: "index_posts_on_user_id", using: :btree
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.string   "resource_type"
    t.integer  "resource_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id", using: :btree
    t.index ["name"], name: "index_roles_on_name", using: :btree
  end

  create_table "shops", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "user_id"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "location_x"
    t.string   "location_y"
    t.string   "web"
    t.integer  "bicycle_sale"
    t.integer  "open_sunday_to_sunday"
    t.integer  "bicycle_rental"
    t.integer  "bicycle_repair"
    t.integer  "state"
    t.string   "address"
    t.string   "horary"
    t.index ["user_id"], name: "index_shops_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id", using: :btree
  end

  add_foreign_key "circuits", "users"
  add_foreign_key "events", "users"
  add_foreign_key "insurances", "users"
  add_foreign_key "posts", "users"
  add_foreign_key "shops", "users"
end
