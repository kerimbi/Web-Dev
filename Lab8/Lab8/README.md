# Lab 8 — Introduction to Django

KBTU Web Development

---

## What this lab covers
- Django project setup with virtual environment
- Creating a Django app (`api`)
- Defining models with ForeignKey relationship
- Database migrations
- Manual JSON API endpoints using `JsonResponse`
- URL routing with `path()` and `<int:id>` parameters

---

## Project Structure

```
Lab8/
├── shop_back/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── api/
│   ├── migrations/
│   │   └── 0001_initial.py
│   ├── models.py       ← Category + Product
│   ├── views.py        ← JsonResponse views
│   ├── urls.py         ← Manual URL patterns
│   └── admin.py
├── manage.py
├── requirements.txt    ← Django only
└── .gitignore
```

---

## Setup

```bash
# 1. Create & activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run migrations
python manage.py migrate

# 4. Start server
python manage.py runserver
```

---

## API Endpoints (GET only)

| URL | Description |
|-----|-------------|
| `/api/products/` | List all products |
| `/api/products/<id>/` | Get product by ID |
| `/api/categories/` | List all categories |
| `/api/categories/<id>/` | Get category by ID |
| `/api/categories/<id>/products/` | Products by category |

---

## Models

**Category**
- `name` — CharField

**Product**
- `name` — CharField
- `price` — FloatField
- `description` — TextField
- `count` — IntegerField
- `is_active` — BooleanField
- `category` — ForeignKey → Category
