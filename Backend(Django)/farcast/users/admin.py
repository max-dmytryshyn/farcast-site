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
        (None, {'fields': ('email', 'first_name', 'last_name', 'address''mobile_phone')}),
    )
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('address', 'mobile_phone')}),
    )


admin.site.register(FarCastUser, FarCastUserAdmin)

