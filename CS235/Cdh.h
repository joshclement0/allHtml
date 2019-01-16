#ifndef CDH_H_
#define CDH_H_
#include "School.h"
#include<string>
#include<sstream>
class Cdh :public School {
private:
	std::string className;
	std::string classTime;
	std::string dayOfWeek;
	std::string name = "cdh";
public:
	Cdh() {}
	Cdh(std::string name, std::string day, std::string time) :
		className(name), classTime(time), dayOfWeek(day) {}
	~Cdh() {}

	/*
	*Print out data members
	*/
	std::string toString() const {
		std::stringstream ss;
		ss << "cdh(" << className << "," << dayOfWeek << "," << classTime << ")";
		return ss.str();
	}

	std::string getName() const {
		return name;
	}

	std::string getClassName() const {
		return className;
	}
	std::string getClassTime() const {
		return classTime;
	}
	std::string getDayOfWeek() const {
		return dayOfWeek;
	}
};
#endif // !CDH_H_
