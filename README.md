# アプリケーションの概要
小学校の先生を対象にした板書共有アプリ

# アプリケーションの機能一覧
- 板書一覧表示機能
- 板書投稿機能
- 板書検索機能
- マイページ（自分が投稿した板書表示）
- お気に入り機能（お気に入りした板書の一覧表示）
- 板書へのコメント機能
- ページネーション

# 実行環境
- OS...Windows
- ruby...2.5.5
- bundler...2.0.1
- rails...5.2.3
- deploy...Heroku
- cloud storage...S3

---

# DB設計
## Users
|Column|Type|Options|
|------|----|-------|
|nickname|STRING|null: false|
|email|STRING|null: false, unique: true|
|encrypted_password|STRING|null: false|

### Association
- has_many :images
- has_many :favorites
- has_many :images, through: :favorites
- has_many :comments

---

## Images
|Column|Type|Options|
|------|----|-------|
|image|STRING|null: false|
|subject|STRING|null: false|
|grade|STRING|null: false|
|testbook_company|STRING|null: false|
|unit|STRING|null: false|
|favorite_count|INTEGER||
|user_id|REFERENCES|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :favorites, dependent: :destroy
- has_many :users, through: :favorites
- has_many :comments, dependent: :destroy

---

## Favorites
|Column|Type|Options|
|------|----|-------|
|user_id|REFERENCES|null: false, foreign_key: true|
|image_id|REFERENCES|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :image, counter_cache: :favorite_count

---

## Comments
|Column|Type|Options|
|------|----|-------|
|text|STRING|null: false|
|user_id|REFERENCES|null: false, foreign_key: true|
|image_id|REFERENCES|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :image
