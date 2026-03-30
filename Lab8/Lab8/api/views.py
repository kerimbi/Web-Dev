from django.http import JsonResponse
from .models import Product, Category


def products_list(request):
    """GET /api/products/ — List all products"""
    products = Product.objects.all()
    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category_id,
        }
        for p in products
    ]
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    """GET /api/products/<id>/ — Get one product by ID"""
    try:
        p = Product.objects.get(id=id)
        data = {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category_id,
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)


def categories_list(request):
    """GET /api/categories/ — List all categories"""
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    """GET /api/categories/<id>/ — Get one category by ID"""
    try:
        c = Category.objects.get(id=id)
        return JsonResponse({"id": c.id, "name": c.name})
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)


def category_products(request, id):
    """GET /api/categories/<id>/products/ — List products by category"""
    products = Product.objects.filter(category_id=id)
    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category_id,
        }
        for p in products
    ]
    return JsonResponse(data, safe=False)
