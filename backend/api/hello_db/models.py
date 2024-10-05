from django.db.models import CharField, Model


class Hello(Model):
    world: CharField = CharField(max_length=100)

    class Meta:
        db_table = 'hello'
