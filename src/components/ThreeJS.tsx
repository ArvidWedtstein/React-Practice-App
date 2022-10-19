import React from "react";
import ViewGL from "./ViewGL";

export default class Scene extends React.Component<any, any> {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    viewGL: ViewGL | undefined;
    constructor(props: any) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount(): void {
        const canvas = this.canvasRef.current;
        if (!canvas) return;
        this.viewGL = new ViewGL(canvas);

        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousemove', this.mouseMove);

    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        const newValue = this.props.whateverProperty;
        this.viewGL?.updateValue(newValue);
    }
    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousemove', this.mouseMove);
    }
    mouseMove = (event: any) => {
        this.viewGL?.onMouseMove();
    }
    handleResize = () => {
        this.viewGL?.onWindowResize(window.innerWidth, window.innerHeight);
    }

    render(): React.ReactNode {
        return (
            <div className="container-fluid">
                <canvas ref={this.canvasRef} />
            </div>
        );
    }
}