#ifndef CSG_H_
#define CSG_H_
#include "School.h"
#include<string>
#include<sstream>
class Csg :public School {
private:
	int stdNumber;
	std::string className;
	std::string stdGrade;
	std::string name = "csg";
public :
	Csg() {}
	Csg(std::string name, int number, std::string grade) :
		className(name), stdGrade(grade), stdNumber(number) {}
	~Csg() {}

	/*
	*Print out data members
	*/
	std::string toString() const {
		std::stringstream ss;
		ss << "csg(" << className << "," << stdNumber << "," << stdGrade << ")";
		return ss.str();
	}
	std::string getName() const {
		return name;
	}
	int getStuNum() const {
		return stdNumber;
	}
	std::string getClassName() const {
		return className;
	}
	std::string getGrade() const {
		return stdGrade;
	}
};
#endif // !CSG_H_

