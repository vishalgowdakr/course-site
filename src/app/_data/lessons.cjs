"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function readFirstLine(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs.promises.readFile(filePath, 'utf-8')];
                case 1:
                    data = _a.sent();
                    if (typeof data === 'string') {
                        return [2 /*return*/, data];
                    }
                    else {
                        throw new Error('Unexpected data type encountered.');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error reading file:', error_1);
                    return [2 /*return*/, Promise.reject(error_1)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function readDirectories(directoryPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    fs.readdir(directoryPath, { withFileTypes: true }, function (err, files) {
                        if (err) {
                            reject("Error reading directory: ".concat(err.message));
                        }
                        else {
                            var directories = files
                                .filter(function (file) { return file.isDirectory(); })
                                .map(function (dir) { return dir.name; });
                            resolve(directories);
                        }
                    });
                })];
        });
    });
}
function readFiles(directoryPath) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    fs.readdir(directoryPath, { withFileTypes: true }, function (err, files) {
                        if (err) {
                            reject("Error reading directory: ".concat(err.message));
                        }
                        else {
                            var fileNames = files
                                .filter(function (file) { return file.isFile(); })
                                .map(function (file) { return file.name; });
                            resolve(fileNames);
                        }
                    });
                })];
        });
    });
}
var constructChapterObject = function (dir) { return __awaiter(void 0, void 0, void 0, function () {
    var lessons, fullLessons;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, readDirectories(dir)];
            case 1:
                lessons = _a.sent();
                return [4 /*yield*/, Promise.all(lessons.map(function (unit) { return __awaiter(void 0, void 0, void 0, function () {
                        var files, chapters, lesson;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, readFiles(dir + unit)];
                                case 1:
                                    files = _a.sent();
                                    console.log(files);
                                    return [4 /*yield*/, Promise.all(files
                                            .map(function (file) { return __awaiter(void 0, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _a = {};
                                                        return [4 /*yield*/, readFirstLine(dir + unit + '/' + file)];
                                                    case 1: return [2 /*return*/, (_a.name = _b.sent(),
                                                            _a.path = dir + unit + '/' + file,
                                                            _a)];
                                                }
                                            });
                                        }); }))];
                                case 2:
                                    chapters = _a.sent();
                                    lesson = {
                                        name: unit,
                                        chapters: chapters,
                                    };
                                    return [2 /*return*/, lesson];
                            }
                        });
                    }); }))];
            case 2:
                fullLessons = _a.sent();
                return [2 /*return*/, fullLessons];
        }
    });
}); };
var directory = '/home/vishalgowdakr/personal/web/course-site/src/app/_data/mdfiles/';
function getLessonsObj() {
    return __awaiter(this, void 0, void 0, function () {
        var lessonsWithChapters, lessonsObj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, constructChapterObject(directory)];
                case 1:
                    lessonsWithChapters = _a.sent();
                    lessonsObj = { lessons: lessonsWithChapters };
                    return [2 /*return*/, lessonsObj];
            }
        });
    });
}
exports.default = getLessonsObj;
getLessonsObj().then(function (obj) { console.log(obj); }).catch(function (error) { return console.error('Error:', error); });
