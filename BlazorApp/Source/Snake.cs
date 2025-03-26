namespace BlazorApp.Source
{
    public class Snake
    {
        private List<Position> body;
        private Position head;
        private Direction headDirection;
        public Snake(Position position)
        {
            this.head = position;
            body = new List<Position>();
            headDirection = Direction.RIGHT;
        }
        public Snake() : this(new Position()) { }
        public Direction HeadDirection { get => headDirection; }
        public Position Head { get => head; }
        public List<Position> Body => body;
        public bool Move(Direction direction)
        {
            if (body.Count > 0)
            {
                body.Insert(1, new Position(head.X, head.Y));
            }

            switch (direction)
            {
                case Direction.UP:
                    this.head.Y -= 1;
                    break;
                case Direction.DOWN:
                    this.head.Y += 1;
                    break;
                case Direction.RIGHT:
                    this.head.X += 1;
                    break;
                case Direction.LEFT:
                    this.head.X -= 1;
                    break;
                default:
                    return false;
            }

            headDirection = direction;

            if(body.Count > 0)
            {
                body.RemoveAt(body.Count - 1);
            }

            return true;
        }

        public void Ate()
        {
            body.Insert(1, new Position(head.X, head.Y));
        }
    }
}
