from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader


def signUpLogIn(request):
    if request.user.is_authenticated():
        #send them to /home
        return HttpResponseRedirect("home")
    else:
        #display sign in/sign up
        template = loader.get_template('socialMedia/signUpLogin.html')
        context = {

        }
        return HttpResponse(template.render(context, request))

def home(request):
    if request.user.is_authenticated():
        #proceed
        template = loader.get_template('socialMedia/home.html')
        context = {

        }
        return HttpResponse(template.render(context, request))
    else:
        #login
        return HttpResponseRedirect("/")