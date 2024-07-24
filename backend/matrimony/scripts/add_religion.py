import os
import json
from django.db import transaction
from wedlock.models import Religion, Caste, SubCaste

from django.conf import settings

religion_file_path = os.path.join(settings.BASE_DIR, 'common', 'religion.json')

with open(religion_file_path) as religion_file:
    religions = json.loads(religion_file.read())
    print(religions.keys())


@transaction.atomic()
def relegion_data():
    for religion, castes in religions.items():
        relg = Religion.objects.create(name=religion)
        print("religion", relg.name)
        for caste, subs in castes.items():
            cast = Caste.objects.create(religion=relg, name=caste)
            print("catse", cast.name)
            for sub in subs:
                sct = SubCaste.objects.create(caste=cast, name=sub)
                print("sub", sct.name)
            print("---------------")
        print("------------------------")
    print("--------------------------------------------")


relegion_data()


"""

const createCheckoutSession = async () => {
    try {
        // Await the result of the axios.post call
        const response = await axios.post('payments/create-checkout-session/');
        
        // The data should be in response.data
        const data = response.data;

        // Return the session ID if the request was successful
        return data.id;

    } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error creating checkout session:', error);
    }
};


"""