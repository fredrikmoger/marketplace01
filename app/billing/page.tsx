import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import prisma from '../lib/db';
import { Button } from '@/components/ui/button';
import { CreateStripeAccoutnLink, GetStripeDashboardLink } from '../actions';
import { Submitbutton } from '../components/SubmitButtons';
import { unstable_noStore as noStore } from 'next/cache';

async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      stripeConnectedLinked: true,
    },
  });

  return data;
}

export default async function BillingRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error('Unauthorized');
  }

  // TODO: Det er en issue med at brukere ikke blir laget i lokalhost (aka kommer ikke inn i supabase). Det gjør at "connect to stripe knappen ikke kommer opp"

  const data = await getData(user.id);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Betalinger</CardTitle>
          <CardDescription>
            Se alle detaljer om betalingene dine
          </CardDescription>
        </CardHeader>
        <CardContent>
          {data?.stripeConnectedLinked === false && (
            <form action={CreateStripeAccoutnLink}>
              <Submitbutton title="Koble kontoen din til Stripe" />
            </form>
          )}

          {data?.stripeConnectedLinked === true && (
            <form action={GetStripeDashboardLink}>
              <Submitbutton title="Se dashboard" />
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
