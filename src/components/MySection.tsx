import "./MySection.scss";
import { PropsWithChildren } from "react";

interface MySectionProps {
	title: string
	description: string
	image: string
	headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
}

// Developer makes decisions about what to expose as props
// There's nothing special needed here to make the component configurable
function MySection(props: PropsWithChildren<MySectionProps>) {
	const { headingLevel = 2 } = props;

	return (
		<div className="MySection">
			{/* Example of passing configuration prop into nested component */}
			<Heading level={headingLevel} className="mb-4">
				{props.title}
			</Heading>

			{props.children}

			<div className="grid grid-cols-2 gap-2">
				<div>{props.description}</div>
				<div>
					<img src={props.image} alt="" />
				</div>
			</div>
		</div>
	)
}

// Ignore this stuff: Pretend these are default components exposed by our library
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6,
}

function Heading (props: HeadingProps) {
  const H = `h${props.level ? props.level : 1}` as const;

  return (
    <H className={props.className}>
      {props.children}
    </H>
  );
};

// Exports
export {
	MySection,
}

export type { MySectionProps }
