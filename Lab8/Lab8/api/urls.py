from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_list),               # GET /api/products/
    path('products/<int:id>/', views.product_detail),     # GET /api/products/<id>/
    path('categories/', views.categories_list),           # GET /api/categories/
    path('categories/<int:id>/', views.category_detail),  # GET /api/categories/<id>/
    path('categories/<int:id>/products/', views.category_products),  # GET /api/categories/<id>/products/
]
