# DB設計

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups
- has_many :groups, through: :groups_users
- has_many :messages

## groups table

|Column|Type|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :users
- has_many :users, through: :groups_users
- has_many :messages

## messages table

|Column|Type|Option|
|------|----|------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groups_users table

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user　
- belongs_to :group　


