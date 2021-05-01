A CustomUser user model created in the app consists of:
    1. Actually the model with following differences from a default one:
        1.1 Six additional CharFields  of various length and purpose without notable functions
        1.2 One more CharField mobile_phone that uses a RegexValidator and namely RegexValidator phone_regex(imported from core.validators)
        1.3 A CountryField that allows to choose country from a drop-out list rather than typing it bluntly(requires django_countries app added in settings.py and import )
        1.4 An ImageField that uploads 
        1.5 Meta class that enables ordering by last_name
        1.6 Every field uses verbose_name and/or message for better representation and gettext_lazy translation(imported from utils.translation)
        1.7 String representation for user objects as a "username: first_name last_name"
    2. A CustomUserAdmin designed to work with the CustomUser just like the default one would work with default User