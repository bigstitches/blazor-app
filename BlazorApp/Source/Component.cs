namespace BlazorApp.Source
{
    public abstract class Component
    {
        public List<Position> parts { get; protected set; }
        public Position position { get; protected set; }
        public Direction direction { get; protected set; }

        public abstract bool Update();
        public abstract bool Render();
        public abstract bool Move(Direction direction);

        public abstract bool Relocate(Position position);

        public void ChangePosition(Position position)
        {
            this.position = position;
        }
        public bool CheckCollision(Component component)
        {
            return this.position.Equals(component.position);
        }
        public virtual void Reset()
        {
            position = new Position();
        }
    }
}
