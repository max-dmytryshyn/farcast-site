from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import FarCastUser

class FarCastUserAdmin(UserAdmin):
    add_form = UserCreationForm
    form = UserChangeForm
    model = FarCastUser
    list_display = ['pk', 'email', 'username', 'first_name', 'last_name']
    add_fieldsets = UserAdmin.add_fieldsets + (
    (None, {'fields': ('email', 'first_name', 'last_name', 'date_of_birth', 'address1', 'address2', 'zip_code', 'city', 'country', 'mobile_phone', 'additional_information', 'photo',)}),
)
    fieldsets = UserAdmin.fieldsets + (
    (None, {'fields': ('date_of_birth', 'address1', 'address2', 'zip_code', 'city', 'country', 'mobile_phone', 'additional_information', 'photo',)}),
)


admin.site.register(FarCastUser, FarCastUserAdmin)

# Register your models here.
