namespace BlazorApp.Source
{
    public class Food
    {
        private Position position;
        public Food()
        {
            this.position = new Position(15, 15);
        }
        public Position Position => position;

        public bool Relocate(Position position)
        {
            this.position = position;
            return true;
        }
    }
}
