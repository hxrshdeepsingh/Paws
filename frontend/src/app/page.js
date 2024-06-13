'use client';

import { Button } from '@/components/ui/button';
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import data from '../config/home.json';

export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <div className="bg-muted hero-image rounded-3xl p-5">
          <div className=" h-[60vh] flex flex-col justify-center">
            <div className="w-full text-center">
              <h2 className="text-4xl font-semibold mb-3">{data.hero.title}</h2>
              <h3>{data.hero.description}</h3>
              <Button className="w-fit mt-5">Explore</Button>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 md:gap-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-01-chunk-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-01-chunk-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="min-h-[50vh] grid grid-cols-1 md:grid-cols-2 gap-5 my-10"
        >
          <div>
            <img
              className="w-full h-auto rounded-3xl"
              src={'/assets/Dog.avif'}
              alt="Dog"
            />
          </div>
          <div>
            <h2 className="text-4xl mt-10 font-semibold mb-3">
              about pawsligth
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              maiores velit perferendis porro ratione, ex alias nesciunt ad quia
              exercitationem quidem eveniet autem inventore, nihil omnis.
              Distinctio incidunt eum aliquam amet! Ex.
            </p>
          </div>
        </div>

        <div className="my-5">
          <div className="py-3 flex flex-col-reverse md:flex-row justify-between items-center gap-5">
            <div className="w-full ">
              <h2 className="text-4xl font-semibold mb-3">
                Landing page title
              </h2>
              <h3>And a subheading describing your site, too</h3>
              <Button className="w-fit mt-5">Explore</Button>
            </div>
            <div className="w-full">
              <img
                className="w-full h-auto rounded-3xl"
                src={'/assets/Dog.avif'}
                alt="Dog"
              />
            </div>
          </div>

          <div className="py-3 flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="w-full">
              <img
                className="w-full h-auto rounded-3xl"
                src={'/assets/Dog.avif'}
                alt="Dog"
              />
            </div>
            <div className="w-full">
              <h2 className="text-4xl font-semibold mb-3">
                Landing page title
              </h2>
              <h3>And a subheading describing your site, too</h3>
              <Button className="w-fit mt-5">Explore</Button>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="grid mx-auto place-items-center h-[30vh] bg-primary rounded-3xl my-10 px-4"
        >
          <div>
            <h3 className="text-2xl md:text-4xl text-center font-semibold mb-3">
              Contact Us
            </h3>
            <div className="font-semibold grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <p>Email: ishu.cxx@gmail.com</p>
              <p>Phone: +01 98390-89232</p>
              <p>Address: Mansarovar,Rajasthan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
