from django.db import models
from datetime import datetime


class Category(models.Model):
    name = models.CharField(verbose_name='Категория', max_length=100, db_index= True)
    slug = models.SlugField(max_length=100, unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        
    def __str__(self):
        return self.name

class Brand(models.Model):
    name = models.CharField(verbose_name='Бренд', max_length=100, db_index= True)
    slug = models.SlugField(max_length=100, unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'Бренд'
        verbose_name_plural = 'Бренды'
        
    def __str__(self):
        return self.name



class Product(models.Model):
    category = models.ForeignKey(Category,verbose_name='Категория', related_name='products', on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand,verbose_name='Бренд', related_name='products', on_delete=models.CASCADE)
    name = models.CharField(verbose_name='Название товара', max_length=150, db_index= True)
    slug = models.CharField(max_length=150, db_index= True, unique=True)
    image = models.ImageField(upload_to='product/%Y/%m/%d/')
    description = models.TextField(verbose_name='Описание товара', max_length=1000)
    price = models.DecimalField(verbose_name='Цена товара',max_digits=10, decimal_places=2)
    available = models.BooleanField(verbose_name='Наличие', default= True)
    new  = models.BooleanField(verbose_name="Новинка", default= False)


    class Meta:
        ordering = ('name',)
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
        index_together = (('id', 'slug'), )
        
    def __str__(self):
        return self.name    