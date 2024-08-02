"use client"
import User from "@/Apppages/User";
import { Provider } from 'react-redux';
import store from '@/store'


export default function Profile() {
    return (
    
      <div>
       Profile
       <Provider store={store
    }>
         <User/>
    </Provider>
      </div>
    );
  }
  