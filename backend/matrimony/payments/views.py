import stripe
from rest_framework.views import APIView
from rest_framework.response import Response

from matrimony import settings

# Create your views here.

class CreateCheckoutSessionView(APIView):
    def post(self, request, *args, **kwargs):

        price = request.query_params.get('price', None)
        product_id = request.query_params.get('product_id', None)

        try:
            stripe.api_key = settings.STRIPE_SECRET_KEY

            price = stripe.Price.create(
                unit_amount=int(price)*100,
                currency='inr',
                product=product_id,
                recurring={
                    'interval': 'month',
                },
            )
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[
                    {
                        'price': price.id,
                        'quantity': 1,
                    },
                ],
                mode='subscription',
                success_url=settings.FRONT_URL + '/payment?success=true&session_id={CHECKOUT_SESSION_ID}',
                cancel_url=settings.FRONT_URL + '/payment?cancel=true',
            )
            return Response({
                'id': checkout_session.id
            })
        except Exception as e:
            return Response({'error': str(e)}, status=403)
