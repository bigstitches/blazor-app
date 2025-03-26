using static System.Formats.Asn1.AsnWriter;

namespace BlazorApp.Source
{
    public class GameRulesScore
    {
        Snake snake = new Snake();

        public int CurrentScore { get; set; }
        public int TopScore { get; set; }

        bool isGameOver;

        // Define the Snake's initial direction
        Direction snakeDirection = Direction.RIGHT;

        // Define the food's initial position
        int foodRow = 5;
        int foodCol = 5;

    }
}
