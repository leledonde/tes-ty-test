import React from "react";
import "./globals.css";
import Image from "next/image";
import * as Icon from "react-feather";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="hero-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6">
            บ้านพัก <span className="text-sky-500">พูลวิลล่า</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Exclusive pool villas in Pattaya for u!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={"/villas"}>
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full transition shadow-lg">
                Explore Villas
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Featured <span className="text-sky-500">Villas</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each villa is designed to blend modern with natural surroundings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="villa-card bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/house.jpg"
                  width={640}
                  height={360}
                  alt="Oceanfront Villa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                  From $450/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  House1
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Icon.MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">Pattaya, Thailand</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Icon.Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">4 Guests</span>
                  </div>
                  <div className="flex items-center">
                    <Icon.Home className="w-4 h-4 mr-1" />
                    <span className="text-sm">3 Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Icon.Droplet className="w-4 h-4 mr-1 pool-icon" />
                    <span className="text-sm">Private Pool</span>
                  </div>
                </div>
                <button className="w-full mt-2 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>

            <div className="villa-card bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/house.jpg"
                  width={640}
                  height={360}
                  alt="Mountain Retreat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                  From $380/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  House2
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Icon.MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">Thai</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Icon.Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">6 Guests</span>
                  </div>
                  <div className="flex items-center">
                    <Icon.Home className="w-4 h-4 mr-1" />
                    <span className="text-sm">4 Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Icon.Droplet className="w-4 h-4 mr-1 pool-icon" />
                    <span className="text-sm">Heated Pool</span>
                  </div>
                </div>
                <button className="w-full mt-2 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>

            <div className="villa-card bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/house.jpg"
                  width={640}
                  height={360}
                  alt="Desert Oasis"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                  From $520/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  House3
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Icon.MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">Land of Smile</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Icon.Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">2 Guests</span>
                  </div>
                  <div className="flex items-center">
                    <Icon.Home className="w-4 h-4 mr-1" />
                    <span className="text-sm">1 Bedroom</span>
                  </div>
                  <div className="flex items-center">
                    <Icon.Droplet className="w-4 h-4 mr-1 pool-icon" />
                    <span className="text-sm">Infinity Pool</span>
                  </div>
                </div>
                <button className="w-full mt-2 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              ทำไมเลือก <span className="text-sky-500">...s</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">...</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-sky-50 p-4 rounded-full">
                  <Icon.Shield className="w-8 h-8 text-sky-500" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Privacy
              </h3>
              <p className="text-gray-600">...</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-sky-50 p-4 rounded-full">
                  <Icon.Award className="w-8 h-8 text-sky-500" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">...</h3>
              <p className="text-gray-600">...</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-sky-50 p-4 rounded-full">
                  <Icon.User className="w-8 h-8 text-sky-500" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
