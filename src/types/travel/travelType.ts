type Trip = {
    activities: string[];
    budget: number;
    createdAt: string;
    description: string;
    destination: string;
    endDate: string;
    file: string;
    id: string;
    startDate: string;
    travelType: string;
    updatedAt: string;
    userId: string;
  };
  
 export type TravelPlan = {
    createdAt: string;
    id: string;
    senderId: string;
    status: string;
    trip: Trip;
    tripId: string;
    updatedAt: string;
    userId: string;
  };
  