"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateAttributeMock = (function () {
    function DateAttributeMock(attribute, dateAttributeFormat, controls) {
        this.attribute = attribute;
        this.dateAttributeFormat = dateAttributeFormat;
        this.controls = controls;
    }
    DateAttributeMock.prototype.getFormat = function () {
        return this.dateAttributeFormat;
    };
    DateAttributeMock.prototype.getValue = function () {
        return this.attribute.getValue();
    };
    DateAttributeMock.prototype.setValue = function (value) {
        this.attribute.setValue(value);
    };
    DateAttributeMock.prototype.addOnChange = function (handler) {
        this.attribute.addOnChange(handler);
    };
    DateAttributeMock.prototype.fireOnChange = function () {
        this.attribute.fireOnChange();
    };
    DateAttributeMock.prototype.getAttributeType = function () {
        return this.attribute.getAttributeType();
    };
    DateAttributeMock.prototype.getIsDirty = function () {
        return this.attribute.getIsDirty();
    };
    DateAttributeMock.prototype.getName = function () {
        return this.attribute.getName();
    };
    DateAttributeMock.prototype.getParent = function () {
        return this.attribute.getParent();
    };
    DateAttributeMock.prototype.getRequiredLevel = function () {
        return this.attribute.getRequiredLevel();
    };
    DateAttributeMock.prototype.getSubmitMode = function () {
        return this.attribute.getSubmitMode();
    };
    DateAttributeMock.prototype.getUserPrivilege = function () {
        return this.attribute.getUserPrivilege();
    };
    DateAttributeMock.prototype.removeOnChange = function (handler) {
        this.attribute.removeOnChange(handler);
    };
    DateAttributeMock.prototype.setRequiredLevel = function (requirementLevel) {
        this.attribute.setRequiredLevel(requirementLevel);
    };
    DateAttributeMock.prototype.setSubmitMode = function (submitMode) {
        this.attribute.setSubmitMode(submitMode);
    };
    return DateAttributeMock;
}());
exports.DateAttributeMock = DateAttributeMock;
