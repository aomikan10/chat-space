# DB設計

## users table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|user_name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups
- has_many :messages

## groups table

|Column|Type|Option|
|------|----|------|
|group-name|string|null: false|
|group_id|integer|null: false|

### Association
- has_many :users
- has_many :messages

## message table

|Column|Type|Option|
|------|----|------|
|body|text|null: false|
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


