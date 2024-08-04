enum CardianalDirection{
North,
East,
South,
West
};

console.log(CardianalDirection.West);

enum cardianalDirection{
    North=1,
    East,
    South,
    West
    };
    
    console.log(cardianalDirection.West);

    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
      }
      // logs 404
      console.log(StatusCodes.NotFound);
      // logs 200
      console.log(StatusCodes.Success);

      enum CardinalDirectionsS {
        North = 'North',
        East = "East",
        South = "South",
        West = "West"
      };
      // logs "North"
      console.log(CardinalDirectionsS.North);
      // logs "West"
      console.log(CardinalDirectionsS.West);