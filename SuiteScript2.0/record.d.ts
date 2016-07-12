/// <reference path="../SuiteScript2.0-Globals/index.d.ts" />

export interface RecordModule {
    /**
     * Attaches a record to another record.
     */
    attach: RecordAttachFunction;
    copy: RecordCopyFunction;
    create: RecordCreateFunction;
    /**
     * Loads an existing record.
     */
    load: RecordLoadFunction;
    delete: RecordDeleteFunction;
    detach: RecordDetachFunction;
    submitFields: SubmitFieldsFunction;
    transform: RecordTransformFunction;
    Type: RecordTypes;
}

export default RecordModule;
