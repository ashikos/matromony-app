import stripe
from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.constants import TierTypes
from rest_framework import viewsets

from matrimony import settings
from payments import serializers as pay_serializers
from payments import models as pay_models



# Create your views here.

class CreateCheckoutSessionView(APIView):
    def post(self, request, *args, **kwargs):

        price = request.query_params.get('price', None)
        product_id = request.query_params.get('product_id', None)

        tier = TierTypes.GOLD.value if int(price) == 199 else TierTypes.DIAMOND.value

        try:
            stripe.api_key = settings.STRIPE_SECRET_KEY

            price = stripe.Price.create(
                unit_amount=int(price) * 100,
                currency='eur',
                product=product_id,
                recurring={
                    'interval': 'month',
                },
            )
            checkout_session = stripe.checkout.Session.create(
                payment_method_types=['bancontact'],
                line_items=[
                    {
                        'price': price.id,
                        'quantity': 1,
                    },
                ],
                mode='subscription',
                success_url=settings.FRONT_URL + f"/payment?success=true&session_id={'{CHECKOUT_SESSION_ID}'}&tier={tier}",
                cancel_url=settings.FRONT_URL + '/payment?cancel=true&',
            )
            return Response({
                'id': checkout_session.id
            })
        except Exception as e:
            return Response({'error': str(e)}, status=403)


class TransactionView(viewsets.ModelViewSet):
    """Viewset for transaction model"""

    queryset = pay_models.Transaction.objects.all()
    serializer_class = pay_serializers.PaymentSerializer























