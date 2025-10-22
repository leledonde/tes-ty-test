import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";

const villas = () => {
  return (
    <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          Discover Our <span className="text-sky-500">Villass</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          พูลวิลล่าทั้งหมด!
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-medium text-gray-800 mb-4">ตัวกรอง</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">สถานที่</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="location-pattaya"
                  className="hidden filter-checkbox"
                  data-filter="location"
                  value="pattaya"
                />
                <Label
                  htmlFor="location-pattaya"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  พัทยา
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="location-rayong"
                  className="hidden filter-checkbox"
                  data-filter="location"
                  value="Swiss rayong"
                />
                <Label
                  htmlFor="location-rayong"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  ระยอง
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="location-bangkok"
                  className="hidden filter-checkbox"
                  data-filter="location"
                  value="bangkok"
                />
                <Label
                  htmlFor="location-bangkok"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  กรุงเทพฯ
                </Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">ราคา</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="price-low"
                  className="hidden filter-checkbox"
                  data-filter="price"
                  value="low"
                />
                <Label
                  htmlFor="price-low"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  $300-$400
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="price-medium"
                  className="hidden filter-checkbox"
                  data-filter="price"
                  value="medium"
                />
                <Label
                  htmlFor="price-medium"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  $400-$500
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="price-high"
                  className="hidden filter-checkbox"
                  data-filter="price"
                  value="high"
                />
                <Label
                  htmlFor="price-high"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  $500+
                </Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Bedrooms</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="bedrooms-1"
                  className="hidden filter-checkbox"
                  data-filter="bedrooms"
                  value="1"
                />
                <Label
                  htmlFor="bedrooms-1"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  1 Bedroom
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="bedrooms-2-3"
                  className="hidden filter-checkbox"
                  data-filter="bedrooms"
                  value="2-3"
                />
                <Label
                  htmlFor="bedrooms-2-3"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  2-3 Bedrooms
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="bedrooms-4+"
                  className="hidden filter-checkbox"
                  data-filter="bedrooms"
                  value="4+"
                />
                <Label
                  htmlFor="bedrooms-4+"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  4+ Bedrooms
                </Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">อื่นๆ</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="pool"
                  className="hidden filter-checkbox"
                  data-filter="amenities"
                  value="pool"
                />
                <Label
                  htmlFor="pool"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  Private Pool
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="ocean-view"
                  className="hidden filter-checkbox"
                  data-filter="amenities"
                  value="ocean-view"
                />
                <Label
                  htmlFor="ocean-view"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  Ocean View
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  type="checkbox"
                  id="heated-pool"
                  className="hidden filter-checkbox"
                  data-filter="amenities"
                  value="heated-pool"
                />
                <Label
                  htmlFor="heated-pool"
                  className="filter-Label cursor-pointer px-3 py-1 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  Heated Pool
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default villas;
