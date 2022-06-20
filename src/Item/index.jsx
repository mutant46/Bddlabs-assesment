import * as React from "react";
import "./item.scss";

const Index = ({ item }) => {
  const {
    id,
    name,
    version,
    frequency,
    created_by,
    updated_by,
    target,
    source,
    status,
    pipeline,
    lastExecuteAt,
    nextExecuteAt,
    startAt,
    endAt,
    batchprocessed,
    created_at,
    updated_at,
    recordprocessed,
  } = item;

  const getDateTime = (datetime) => {
    if (datetime) {
      const x = datetime.split("T");
      const date = x[0];
      const hours = x[1].split(":")[0];
      const mins = x[1].split(":")[1];
      const AmOrPm = hours >= 12 ? "pm" : "am";
      const formated_h = hours % 12 || 12;
      return `${date} ${hours}:${mins} ${AmOrPm}`;
    }
    return "None";
  };

  var start = getDateTime(startAt);
  var end = getDateTime(endAt);
  var lastExecute = getDateTime(lastExecuteAt);
  var nextExecute = getDateTime(nextExecuteAt);
  var created = getDateTime(created_at);
  var updated = getDateTime(updated_at);

  return (
    <>
      {/* Baisc Information */}
      <h1 className="object-name">{name}</h1>
      <div className="table__wrapper">
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>Id</th>
              <th>recordprocessed</th>
              <th>Version</th>
              <th>status</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{recordprocessed}</td>
              <td>{version}</td>
              <td>{status}</td>
              <td>{frequency}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table__wrapper">
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>Start At</th>
              <th>End At</th>
              <th>Last Execution</th>
              <th>Next Execution</th>
              <th>Batch Processed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{start}</td>
              <td>{end}</td>
              <td>{lastExecute}</td>
              <td>{nextExecute}</td>
              <td>{batchprocessed}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="box">
        <BoxItemOne {...created_by} title="Created By" date={created} />
        {/* if update Info == NULL render "not Updated" */}
        <BoxItemOne {...updated_by} title="Updated By" date={updated}>
          <div className="details">
            <p style={{ textAlign: "center" }}>
              <span>Not Updated Yet</span>
            </p>
          </div>
        </BoxItemOne>
        <BoxItemTwo {...source} title="Source" />
        <BoxItemTwo {...target} title="Target" />
      </div>
      <div className="pipelines">
        <h1>PipeLines</h1>
        {pipeline.map((item, index) => {
          const {
            ID,
            check,
            deltas,
            params,
            load_action,
            load_status,
            natural_key,
            delta_fields,
            source_table,
            target_table,
            pipeline_name,
            trigger_fields,
            target_table_action,
          } = item;

          return (
            <section key={new Date().getTime().toLocaleString() + Math.random()}>
              <div className="param__info">
                <h3>Item - {index + 1}</h3>
                <div className="extra__info">
                  <p>
                    <span>ID : </span>
                    {ID}
                  </p>
                  <p>
                    <span>Deltas : </span>
                    {deltas[0]}, {deltas[1]}
                  </p>
                  <p>
                    <span>Check : </span>
                    {check ? "True" : "False"}
                  </p>
                  <p>
                    <span>Load Action : </span>
                    {load_action}
                  </p>
                  <p>
                    <span>Load Status : </span>
                    {load_status}
                  </p>
                  <p>
                    <span>Natural key : </span>
                    {natural_key}
                  </p>
                  <p>
                    <span>Delta Fields : </span>
                    {delta_fields}
                  </p>
                  <p>
                    <span>Source Table : </span>
                    {source_table}
                  </p>
                  <p>
                    <span>Pipline_Name : </span>
                    {pipeline_name}
                  </p>
                  <p>
                    <span>Trigger Fields : </span>
                    {trigger_fields}
                  </p>
                  <p>
                    <span>Target_table_action : </span>
                    {target_table_action}
                  </p>
                  <p>
                    <span>Target Table : </span>
                    {target_table}
                  </p>
                </div>
              </div>
              <div className="table__wrapper">
                <table cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Group</th>
                      <th>Param</th>
                      <th>Table</th>
                      <th>Value</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {params.length != 0 ? (
                      params.map((paramItem, index) => {
                        const { group, param, table, value, status } = paramItem;
                        return (
                          <tr key={index} className="param-row">
                            <td>{group ? group : "No Value"}</td>
                            <td>{param ? param : "No Value"}</td>
                            <td>{table ? table : "No Value"}</td>
                            <td>{value ? value : "No Value"}</td>
                            <td>{status ? status : "No Value"}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr key={index}>
                        <td colSpan="5" style={{ fontSize: "1.2rem" }}>
                          No Params
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

const BoxItemOne = ({ title, id, email, first_name, last_name, children, date }) => {
  return (
    <div className="box__item">
      <h3>{title}</h3>
      {email != "" ? (
        <div className="details">
          <p>
            <span>Id : </span>
            {id}
          </p>
          <p>
            <span>First Name: </span>
            {first_name}
          </p>
          <p>
            <span>last Name : </span>
            {last_name}
          </p>
          <p>
            <span>Email : </span>
            {email}
          </p>
          <p>
            <span>Date : </span>
            {date}
          </p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

const BoxItemTwo = ({ title, id, name, connection_type, logoURL }) => {
  return (
    <div className="box__item">
      <h3>{title}</h3>
      <div className="details">
        <p>
          <span>Id : </span>
          {id}
        </p>
        <p>
          <span>Name : </span>
          {name}
        </p>
        <p>
          <span>Connection Type: </span>
          {connection_type}
        </p>
        <p>
          <span>logoURL : </span>
          {logoURL}
        </p>
      </div>
    </div>
  );
};

export default Index;
