import React from 'react';
import './cssfiles/ChequeProcessingWorkflow.css';

function ChequeProcessingWorkflow() {
  return (
    <div className="workflow-container">
      <div className="workflow-step-container">
        <div className="workflow-item workflow-item1">
          <div className="workflow-step">1</div>
          <div className="workflow-text">
            <strong>Scan and Select:</strong> Select the cheque to be processed.
          </div>
        </div>
        <div className="workflow-item workflow-item2">
          <div className="workflow-step">2</div>
          <div className="workflow-text">
            <strong>Upload:</strong> Upload the cheque image for analysis.
          </div>
        </div>
        <div className="workflow-item workflow-item3">
          <div className="workflow-step">3</div>
          <div className="workflow-text">
            <strong>Fraud Check:</strong> Run a fraud check on the cheque.
          </div>
        </div>
        <div className="workflow-item workflow-item4">
          <div className="workflow-step">4</div>
          <div className="workflow-text">
            <strong>Process/Save:</strong> Process valid cheques and extract.
          </div>
        </div>
        <div className="workflow-item workflow-item5">
          <div className="workflow-step">5</div>
          <div className="workflow-text">
            <strong>Notification:</strong> Notify the relevant users of the cheque.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChequeProcessingWorkflow;
