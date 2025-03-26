namespace BlazorApp.Source
{
    public enum Direction
    {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        STOP
    }
    public class Position
    {
        private int x;
        private int y;

        public Position(int x, int y)       
        {
            this.x = x;
            this.y = y;
        }
        public Position() : this(0, 0) { }
        public int X { get => x; set => x = value;}
        public int Y { get => y; set => y = value;}

        public override bool Equals(object? obj)
        {
            if(obj is Position)
            {
                return ((Position)obj).X == this.X && ((Position)obj).Y == this.Y;
            } else
            {
                return false;
            }
        }
    }
}
