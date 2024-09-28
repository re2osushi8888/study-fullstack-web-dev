# python-dev-container

## 動かし方
### マイグレーション
`$ poetry run python manage.py migrate --settings config.settings.development`
### サーバー起動
`$ poetry run python manage.py runserver 0.0.0.0:8000 --settings config.settings.development`
### WSL側での疎通確認
`$ curl -L http://localhost:8000/api/hello/backend`
### pingでの他コンテナ疎通確認方法
```
# pingのインストール
$ sudo apt update
$ sudo apt install iputils-ping net-tools

# dockerコンテナの名前解決ができているかどうか
$ ping db
$ ping frontend
```
