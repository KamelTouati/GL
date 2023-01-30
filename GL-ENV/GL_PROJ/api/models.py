from django.db import models
# from base.models import User
from accounts.models import UserAccount
from django.utils import timezone

# Create your models here.

class Adresse(models.Model):
    wilaya=models.CharField(max_length=70)
    Commune=models.CharField(max_length=70)
    latitude = models.DecimalField(max_digits=7, decimal_places=3, null=True, blank=True)

    longitude = models.DecimalField(max_digits=7, decimal_places=3, null=True, blank=True)

def user_directory_path(instance, filename):

    return 'user_{0}/{1}'.format(instance.user.id, filename)


class Annonce(models.Model):

    catégories_choix = (
        ('primaire', 'primaire'),
        ('college', 'college'),
        ('lycee', 'lycee'),
    )
    modalités_choix = (
        ('offline', 'offline'),
        ('online', 'online'),
        
    )
    thèmes_choix=(
        ('maths', 'maths'),
        ('sciences', 'sciences'),
        ('physique', 'physique'),
        ('arabe', 'arabe'),
        ('anglais', 'anglais'),
        ('')

    )
    thème =models.CharField(max_length=50, choices=thèmes_choix)
    annonceur = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='annonceur')
    titre=models.CharField(max_length=100)
    catégorie = models.CharField(max_length=10, choices=catégories_choix,)
    modalité = models.CharField(max_length=8, choices=modalités_choix,)
    description = models.TextField(max_length=300, blank=True)
    tarif  = models.CharField(max_length=30)
    adresse = models.ForeignKey(Adresse, on_delete=models.CASCADE, blank=True, null=True)
    publié = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.annonceur.email +' '+self.titre[:15]

class Photo(models.Model):
    upload = models.ImageField(upload_to = 'images')
    annonce = models.ForeignKey(Annonce, related_name='images', on_delete=models.CASCADE)



class Message(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]