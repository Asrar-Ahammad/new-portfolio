import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
  } from "@/components/ui/timeline";
  
  const items = [
    {
      id: 1,
      date: "Aug 22, 2024",
      title: "Tata Consultancy Services",
      description: "Systems Engineer",
    },
    {
      id: 2,
      date: "Jul - Nov, 2023",
      title: "iSignal",
      description: "Frontend Developer Intern",
    },
  ];
  
  const Experience = () => {
    return (
      <>
        <Timeline defaultValue={4}>
          {items.map((item) => (
            <TimelineItem
              key={item.id}
              step={item.id}
              className="group-data-[orientation=vertical]/timeline:sm:ms-32"
            >
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
                  {item.date}
                </TimelineDate>
                <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent className="w-[75%]">
                {item.description}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </>
    );
  };
  
  export default Experience;