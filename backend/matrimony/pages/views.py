from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['message'] = ' confirmation message.'
        return context


class AboutView(TemplateView):
    template_name = 'feedback.html'


class ContactView(TemplateView):
    template_name = 'user.html'
