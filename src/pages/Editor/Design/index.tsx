import DesignLeftTaskList from "./DesignLeftTaskList";
import DesignTopTaskList from "./DesignTopTaskList";

export default function Design() {
  return (
    <div className="flex-1 flex column gap-16 bg-gray width-100">
      <div
        className="width-100 bg-white border-bottom"
        style={{ height: "36px" }}
      >
        <DesignTopTaskList
          data={[
            { id: "1", title: "任务1" },
            { id: "2", title: "任务2" },
          ]}
        />
      </div>
      <div className="flex flex-1">
        <div
          className="p-16 bg-white height-100 border-right"
          style={{ width: "160px" }}
        >
          <DesignLeftTaskList></DesignLeftTaskList>
        </div>
        <div className="flex-1 height-100"></div>
        <div
          className="bg-white height-100 border-left"
          style={{ width: "320px" }}
        ></div>
      </div>
    </div>
  );
}
