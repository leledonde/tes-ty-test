import React from 'react'
import * as Icon from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <Icon.Droplet className="pool-icon w-6 h-6" />
                        <span className="ml-2 text-xl font-light text-gray-200">Villa Pattaya</span>
                    </div>
                    <p className="mb-4">Luxury pool villas with beautiful destinations.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition"><Icon.Instagram /></a>
                        <a href="#" className="hover:text-white transition"><Icon.Facebook /></a>
                        <a href="#" className="hover:text-white transition"><Icon.Twitter /></a>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-gray-200 font-medium mb-4">Explore</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition">All Villas</a></li>
                        <li><a href="#" className="hover:text-white transition">Destinations</a></li>
                        <li><a href="#" className="hover:text-white transition">Special Offers</a></li>
                        <li><a href="#" className="hover:text-white transition">Gift Cards</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-gray-200 font-medium mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition">Blog</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-gray-200 font-medium mb-4">Contact</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <Icon.Mail className="w-4 h-4 mt-1 mr-2" />
                            <span>tedetada@onion.org</span>
                        </li>
                        <li className="flex items-start">
                            <Icon.Phone className="w-4 h-4 mt-1 mr-2" />
                            <span>+66 123-456-789</span>
                        </li>
                        <li className="flex items-start">
                            <Icon.MapPin className="w-4 h-4 mt-1 mr-2" />
                            <span>Bangkok, Thailand</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p>© 2025 TadaNetwork. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer