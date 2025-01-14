
# Create your views here.
from django.shortcuts import render
def home(request):
    return render(request,'homepage.html')

def aboutview(request):
    return render(request,'aboutus.html')

def blogview(request):
    return render(request,'blog.html')

def contactview(request):
    return render(request,'contact.html')

def faqview(request):
    return render(request,'faq.html')

def serviceview(request):
    return render(request,'service.html')

def singlepostview(request):
    return render(request,'singlepost.html')

def teamview(request):
    return render(request,'team.html')

def notfoundview(request):
    return render(request,'404page.html')