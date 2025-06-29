from rest_framework import serializers
from LikeAPP.models import ModelPostLike,ModelCommentLike

class SerializerPostLikesList(serializers.ModelSerializer):
    # Post ID'sine göre o postu beğenen kullanıcıların nickname'ini döndürür
    username=serializers.CharField(source="user.username")
    class Meta:
        model  = ModelPostLike
        fields = ("username",)

class SerializerCommentLikesList(serializers.ModelSerializer):
    # Yorum ID'sine göre o yorumu beğenen kullanıcıların nickname'ini döndürür
    username =serializers.CharField(source="user.username")
    class Meta:
        model  = ModelCommentLike
        fields = ("username",)

class SerializerPostLike(serializers.ModelSerializer):
    # postu beğenmeye,beğeni varsa beğeniyi silmeye yarayan serializer
    user=serializers.SerializerMethodField(read_only=True)
    def get_user(self,obj):
        pass
    class Meta:
        model  = ModelPostLike
        fields = ("user",)

class SerializerCommentLike(serializers.ModelSerializer):
    # Yorumu beğenmeye,beğeni varsa beğeniyi silmeye yarayan serializer
    user=serializers.CharField(read_only=True)
    class Meta:
        model  = ModelCommentLike
        fields = ("user",)
