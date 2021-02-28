from django.shortcuts import render, get_object_or_404
from .models import Brand, Category, Product 


def index(request):  
    # Products
    products = Product.objects.filter(available= True)

    # New Products
    new_products = products.filter(new = True)   

    # BOSCH Brand
    brand_bosch = get_object_or_404(Brand, slug= 'bosch')
    # BOSCH Category 
    category_dril = get_object_or_404(Category, slug= 'dril')
    # BOSCH Products
    dril_bosch = products.filter(category = category_dril, brand = brand_bosch)
    
    context ={
        'new_products': new_products,
        'dril_bosch': dril_bosch,
    }
    return render(request, 'pages/index.html',context)